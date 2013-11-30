# knockout-crdt-observable-array
Make a `knockout.ObservableArray` out of CRDT set or document.

## Installation
```sh
npm install knockout-crdt-observable-array
```

## Usage
```js
var ko = require('knockout');
var crdtObservableArray = require('crdt-observable-array');
var Doc = require('crdt').Doc;

var doc = new Doc();
var people = doc.createSet('resource', 'person');

ko.applyBindings({ people: crdtObservableArray(people) });
```
