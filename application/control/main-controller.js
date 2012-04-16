/**
 * @constructor
 * @extends {tuna.control.ViewController}
 */
var MainController = function() {
    tuna.control.ViewController.call(this);

    /**
     * @override
     */
    this._modules = [ 'popup' ];
};

tuna.utils.extend(MainController, tuna.control.ViewController);

tuna.control.setMainController(new MainController());
