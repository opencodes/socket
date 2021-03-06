module.exports = config = {
  "site_name": "Demandware  Open Ecommerce API",
  "version": "0.0.1",
  baseurl : "http://127.0.0.1",
  port:'3700',
  db_options: {
	    host: 'localhost',
	    port: 3306,
	    user: 'root',
	    password: '',
	    database: 'ichat'
  },
  redis: {
	    host: '127.0.0.1',
	    port: 6379
  },
  contact_options: {
	    base_url: 'http://projects.rkjha.com',
	    email: 'rkjha.it.in@gmail.com',
	    phone: '+91-7428-444-177'
  }
};