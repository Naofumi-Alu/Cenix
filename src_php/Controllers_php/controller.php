<?php
require_once '../../vendor/autoload.php';
require '../Routes_php/routes.php';
 
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\RouteCollection;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;


try
{
  // ====== add Routes and instance context ======== //
    // Add Route object(s) to RouteCollection object
    $routes = new RouteCollection();
    $routes->add('index', $index_route);
    $routes->add('index_placeholder_route', $index_placeholder_route);
 
    // Init RequestContext object
    $context = new RequestContext();
    $context->fromRequest(Request::createFromGlobals());
 
    // Init UrlMatcher object
    $matcher = new UrlMatcher($routes, $context);

// =========== this section make conincide the routes ========//
 
    // Find the current route use the methor match
    $parameters = $matcher->match($context->getPathInfo());
 
// =========== links for specify routes========//

    // How to generate a SEO URL
    $generator = new UrlGenerator($routes, $context);
    $url = $generator->generate('index_placeholder_route', array(
      'id' => 123,
    ));
 
    echo '<pre>';
    print_r($parameters);
 
    echo 'Generated URL: ' . $url;
    exit;
}
catch (ResourceNotFoundException $e)
{
  echo $e->getMessage();
}