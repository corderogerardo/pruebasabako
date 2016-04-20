Router.configure({
	layoutTemplate:'layout'
});
Router.route('/', {
	template: 'home',
        layoutTemplate: 'layout'
    });
Router.route('/nosotros', {
	template: 'nosotros',
        layoutTemplate: 'layout'
   });
Router.route('/servicios', {
	template: 'servicios',
        layoutTemplate: 'layout'
    });
Router.route('/contacto', {
	template: 'contacto',
        layoutTemplate: 'layout'
   });
Router.route('/citas', {
	template: 'citas',
        layoutTemplate: 'layout'
   });