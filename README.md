Boxmine
=======

A comprehensive diagram tool for HTML5 web browsers. 

## Features:
<ul>
  <li>Connect objects.</li>
  <li>Change the shape of connection arrows.</li>
  <li>Add points to connecting lines to change their shape and flow.</li>
  <li>Insert external images.</li>
  <li>Insert pre-built objects.</li>
  <li>Save diagrams as JSON, PNG, GIF, JPG and SVG.</li>
  <li>Load saved diagrams from filesystem and website.</li>
</ul>

## Releases

* [Version 2015.05](https://github.com/neonnds/Boxmine/raw/master/boxmine-2015-05.tar.gz)

## Getting Started

Get Boxmine

    $> wget https://github.com/neonnds/Boxmine/raw/master/boxmine-2015-05.tar.gz
    
Extract Boxmine

    $> tar -zxf boxmine-2015-05.tar.gz
    
Enter the Boxmine project

    $> cd ./boxmine-2015-05

Get Boxmine from the offical site

    $> wget https://download.elasticsearch.org/elasticsearch/elasticsearch/elasticsearch-1.5.0.tar.gz
    
Extract ElasticSearch

    $> tar -zxf elasticsearch-1.5.0.tar.gz
    
Start Elastic Search

    $> ./elasticsearch-1.5.0/bin/elasticsearch

Start Boxmine

    $> nodejs index.js
    
Visit in a modern web browser:

    http://127.0.0.1:8000/


## Development

### Requirements
* [Elastic-Core](https://github.com/neonnds/Elastic-Core)
* [CUID](https://github.com/ericelliott/cuid)

### Other Dependencies
* [JQuery](http://jquery.com/) - A fast, small, and feature-rich JavaScript library.
* [JointJS](http://www.jointjs.com/) - An open source JavaScript library for creating diagrams.
* [Node.js](http://nodejs.org/) - A platform built on Chrome's JavaScript runtime.
* [Total.js](http://www.totaljs.com/) - Framework for building Web applications using JavaScript.
* [Pure.css](https://github.com/yahoo/pure/) - A set of small, responsive CSS modules.
* [Tango Icon Library](http://tango.freedesktop.org/Tango_Icon_Library) - A basic set of desktop icons.
* [Cheser Icon Theme](http://gnome-look.org/content/show.php/Cheser+Icons?content=113386) - A mix of different Tango-style icons.

### Linux Installation

Enter the Elastic-Core project sites directory

    $> cd ./Elastic-Core/sites

Get the Boxmine project

    $> git clone https://github.com/neonnds/Boxmine.git

Enter the Boxmine project

    $> cd ./Boxmine

Install the following node modules

    $> npm install cuid --save

Enter the Elastic-Core project

    $> cd ./Elastic-Core

Start Elastic Search

    $> ./elasticsearch-1.5.0/bin/elasticsearch

Start Boxmine

    $> ./run Boxmine

### Existing Solutions
* [Draw.io (Paid)](https://www.draw.io/)
* [Gliffy (Paid)](https://www.gliffy.com)
* [FigurePool (Paid)](http://figurepool.com)
* [Rappid (Demo)](http://www.jointjs.com/rappid)
* [Diagramo (Free)](https://github.com/alexgheorghiu/diagramo)
* [Moqups (Paid)](https://moqups.com/)
