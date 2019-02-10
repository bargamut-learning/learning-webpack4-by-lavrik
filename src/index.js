// import $ from 'jquery';
import some from './some2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

// $('.title').html('Some text!');

console.log(some.avg(1, 4, 8));
console.log(some.max(1, 4, 8));
console.log(
	some.merge(
		{
			a: 1
		}, {
			a: 'a',
			b: 2
		}
	)
);