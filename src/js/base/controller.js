window.Controller = function (options) {
    var init = options.init
    
    return {
        view: null,
        model: null,
        init: function (view, model) {
            this.view = view
            this.model = model
            this.model.init()
            init.call(this, view, model)
            options.bindEvents.call(this)
        },
     }
}


