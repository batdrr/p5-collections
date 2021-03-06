// P_2_1_2_03
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * changing size of circles in a rad grid depending the mouseposition
 *
 * MOUSE
 * position x/y        : module size and offset z
 *
 * KEYS
 * s                   : save png
 */
 'use strict';

 var tileCount = 100;
 
 var moduleColor;
 var moduleAlpha = 180;
 var maxDistance = 100;
 
 function setup() {
   createCanvas(600, 600, WEBGL);
   noFill();
   strokeWeight(5);
   moduleColor = color(255, 255, 255, moduleAlpha);
 }
 
 function draw() {
   clear();
   background(1);
 
   stroke(moduleColor);
 
   for (var gridY = 0; gridY < width; gridY += 25) {
     for (var gridX = 0; gridX < height; gridX += 25) {
       var diameter = dist(mouseX, mouseY, gridX, gridY);
       diameter = diameter / maxDistance * 40;
       push();
       translate(gridX, gridY, diameter * 5);
       rect(0, 0, diameter, diameter); // also nice: ellipse(...)
       pop();
       rotate(frameCount/ 100)
       rotateX(10);
       rotateY(5);
       scale(0.8);
       smooth();
     }
   }
 }
 
 function keyReleased() {
   if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
 }
 