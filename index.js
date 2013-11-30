var ko = require('knockout');

module.exports = function (set, f) {
  var arr = ko.observableArray([]);

  set.on('add', function (row) {
    var r = new (f || Object)(row.toJSON());
    arr.push(r);

    set.on('remove', function onSetRemove(removed) {
      // This is a bit hacky. A Row doesn't have a remove event we can listen on.
      // We can't reliably determine whether a document was removed by listening
      // on its `changes` event because of https://github.com/dominictarr/crdt/issues/30.
      if (removed === row) {
        arr.remove(r);
        set.removeListener('remove', onSetRemove);
      }
    });
  });

  return arr;
};
