jquery.elementsDisabled.js
==========================

jQuery Plugin to disable/enable all events attached to the elements in a given context e.g. $('form.clients').elementDisabled()

Install
==========================
just include the file after jQuery lib and you'll be on the road

Usage
==========================
Firstable you must state a context to work for the plugin. Let's say we wanna disable all elements inside a certain form which has a class named 'clients' and after click a button restore events to each element.

<form action='/clients/new' class='clients'>
	<input type='text' name='first_name' id='first_name'>
	<input type='text' name='last_name' id='last_name'>
	<input type='button' name='activate' id='activateEvents'>
</form>

<script>
      $(function() {
      		$('form.clients #first_name').on('keyup',function(){
      			console.log('first_name_test')
      		})
      		$('form.clients #last_name').on('keyup',function(){
      			console.log('last_name_test')
      		})
      		$('form.clients #activateEvents').on('click',function(e){
      			e.preventDefault()
      			$('form.clients').elementDisabled(disabled:false)
      		})
      		$('form.clients').elementDisabled() //by default disabled is true
      })
<script>