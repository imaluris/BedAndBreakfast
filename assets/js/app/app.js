$(document).ready(function () {
	var ricalcola = function () {

		$("#left-fixed-bar").each(function () {
			$(this).find(".flags").position({
				my: "bottom bottom",
				at: "bottom bottom",
				of: $(this)
			});

		});



		$(".element").each(function () {

			$(this).height($(window).height());

			$(this).find(".auto-center").position({
				my: "center center",
				at: "center center",
				of: $(this)
			});

		});

		$(".element").each(function () {

			$(this).height($(window).height());

			$(this).find(".auto-center-main").position({
				my: "left left",
				at: "left left",
				of: $(this)
			});

		});


	};



	ricalcola();

	$(window).resize(function () {
		ricalcola();
	});

	$(".scroll-to-next").click(function () {
		$("html, body").animate({ scrollTop: $(document).height() }, 1000);
	});


		$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() != $(document).height()) {
			$(".scroll-to-next").show();
		} else {
			$(".scroll-to-next").hide();
		}
		});



});

