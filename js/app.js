$(function() {
  var tabs = $('#features > nav a');
  var tabsContent = $('#features > article > section');

  tabs.click(function(e) {
    e.preventDefault();

    var that = $(this);

    tabs.removeClass('is-selected');
    that.addClass('is-selected');
    tabsContent.removeClass('is-selected');

    tabsContent
      .filter((i, tab) => $(tab).data('id') === that.data('id'))
      .addClass('is-selected');
  });
});
$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});








