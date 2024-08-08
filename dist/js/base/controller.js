"use strict";

window.Controller = function (options) {
  var _init = options.init;
  return {
    view: null,
    model: null,
    init: function init(view, model) {
      this.view = view;
      this.model = model;
      this.model.init();
      _init.call(this, view, model);
      options.bindEvents.call(this);
    }
  };
};