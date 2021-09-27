<?php 
require_once '../../vendor/autoload.php';
 
use Symfony\Component\Routing\Route;
use Symfony\Component\HttpFoundation\Request;

 
  // ======= instance routes ====== //

    // Init basic route
    $index_route = new Route(
        '/index',
        array('controller' => 'FooController')
      );
   
      // Init route with dynamic placeholders
      $index_placeholder_route = new Route(
        '/index_placeholder_route/{id}',
        array('controller' => 'FooController', 'method'=>'load'),
        array('id' => '[0-9]+')
      );

?>