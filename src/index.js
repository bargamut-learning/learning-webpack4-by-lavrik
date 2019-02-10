import $ from 'jquery';
import some from './some2';

$('.title').html('Some text!');

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