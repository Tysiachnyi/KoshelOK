$(document).ready(function(){
    var url_ua = document.location.href;
    var str_ua = '/ua/';
    var result = url_ua.match(str_ua);
    



	//init calc slider
	var calcMax = $('#credit-body').data('value');

	//func to count date
	let date = (val) => {
		let date = new Date();
		let future = new Date(date.setDate(date.getDate() + (val || 30)));
		let day = future.getDate();
		let month = future.getMonth() + 1;
		let year = future.getFullYear();

		if((day + '').length === 1) day = '0' + day
		if((month + '').length === 1) month = '0' + month
		let currentDate = day + '.' + month + '.' + year;
		return currentDate;
	}
	//init date val in html tag
	$('#date').text(date())

	//amount slider
	$(".slider.amount").slider({
		value: 2500,
		max: calcMax,
		min: 500,
		orientation: "horizontal",
		range: "min",
		step: 10,
		animate: true,
		slide: (e, ui) => {
			let days = +$('.day-indicate').text()
			let percent = (days * 1.5) / 100
			let amount = ui.value;
			let percents = Math.ceil(amount * percent)
			let cashback = Math.ceil(amount + amount * percent)
			
			var creditNumber = false;
			var v = amount;
			var limits = [2500, 3500, 4000, 5000, 6000, 7000, 8000, 10000];
            var iter = 1;
            
            for (var i in limits) {
                if (v <= limits[i] && creditNumber === false) {
                    creditNumber = iter;
                }
                iter++;
            }
            
            var showOverflow = creditNumber > 1;
            
            if (showOverflow) {
                if (result) {
                    $('#overflow').html('<br />при ' + creditNumber + '-м кредиті').fadeIn();
                } else {
                    $('#overflow').html('<br />при ' + creditNumber + '-м кредите').fadeIn();
                }
            } else {
                if (result) {
                    $('#overflow').html('Можна отримати');
                } else {
                    $('#overflow').html('Можно получить');
                }
            }
            
			$('.amount-indicate').text(amount);
			$('#credit-amount').val(amount)
			$('#credit-body').text(amount + ' грн')
			$('#percents').text(percents + ' грн')
			$('#cashback').text(cashback + ' грн')
		}
	});

	//days slider
	$(".slider.days").slider({
		value: 30,
		max: 65,
		min: 7,
		step: 1,
		orientation: "horizontal",
		range: "min",
		animate: true,
		slide: (e,ui) => {
		    
			let days = ui.value;
			let amount = +$('.amount-indicate').text();
			let percent = (days * 1.5) / 100;
			let percents = Math.ceil(amount * percent);
			let cashback = Math.ceil(amount + amount * percent);
			
			if (days >= 31 && days <= 65) {
                if (result) {
                    $('#overdays').html('<br />постійним клієнтам').fadeIn();
                } else {
                    $('#overdays').html('<br />постоянным клиентам').fadeIn();
                }
                $('.overflow_corner_days').fadeIn();
            } else {
                $('#overdays').css({
                    display: 'none'
                });
                $('.overflow_corner_days').css({
                    display: 'none'
                });
            }

			$('#days-amount').val(days)
			$('.day-indicate').text(days)
			$('#date').text(date(days))
			$('#percents').text(percents + ' грн')
			$('#cashback').text(cashback + ' грн')
		}
	});
	$(".slider.days").draggable();
	$(".slider.amount").draggable();
	$("#credit-amount").on('change',function(){
		let amount = $(this).val();
		$(".slider.amount").slider( "value", amount );
		let days = +$('.day-indicate').text();
		let percent = (days * 1.5) / 100;
		let percents = Math.ceil(amount * percent);
		let cashback = Math.ceil(+amount + amount * percent);

		$('.amount-indicate').text(amount);
		$('#credit-body').text(amount + ' грн');
		$('#percents').text(percents + ' грн');
		$('#cashback').text(cashback + ' грн');
	})
	$("#days-amount").on('change',function(){
		let days = $(this).val();
		$(".slider.days").slider( "value", days );
		let amount = +$('.amount-indicate').text();
		let percent = (days * 1.5) / 100;
		let percents = Math.ceil(amount * percent);
		let cashback = Math.ceil(+amount + amount * percent);

		$('.amount-indicate').text(amount);
		$('#credit-body').text(amount + ' грн');
		$('#percents').text(percents + ' грн');
		$('#cashback').text(cashback + ' грн');
	})
	
	
    if (result) {
        $('.amount .ui-slider-handle').append('<span id="overflow">Можна отримати</span><span class="overflow_corner"></span>');
    } else {
        $('.amount .ui-slider-handle').append('<span id="overflow">Можно получить</span><span class="overflow_corner"></span>');
    }
    $('.days .ui-slider-handle').append('<span id="overdays" style="display:none;"></span><span style="display:none;" class="overflow_corner_days"></span>');
    
    var _d = new Date;
    var _dd = _d.getFullYear() + '-' + _d.getMonth() + '-' + _d.getDate();

      $('#days-amount').datepicker({

        dayNamesMin: ['Вс', "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        format: 'Y-m-d',
        defaultDate: +11,
        start_date: _dd,
        maxDate: +31,
        minDate: +8,
        onSelect: function (v, e) {
            $('#days').css({
                'color': 'black'
            });
//          console.log(v);
//          console.log(e.minDate);
            var _v = $(this).val();
            if (_v.match(/\d{2}\.\d{2}\.\d{4}/)) {
                var ve = _v.split('.');
                _v = ve[2] + '-' + ve[1] + '-' + ve[0];
                v = _v;
            }
            var diff = new Date(v);
//          console.log(diff);
            diff -= (new Date());
            diff /= ( 1000 * 60 * 60 * 24);
            diff = Math.ceil(diff) - 1;
            
            $('#slider-range-day').slider('value', diff);
            var hs = $('.slider.days').slider();
            $(".slider.days").slider( "value", diff );
            hs.slider('option', 'slide').call(hs, null, {handle: $('#slider-range-day', hs), value: diff});
            // update
        }

    });

	

})

$(document).ready(function(){
	var calcMax = $('#credit-body').data('value');
	var percent = (30 * 1.5) / 100;
	var percents = Math.ceil(calcMax * percent);
	var cashback = Math.ceil(calcMax + calcMax * percent);
	$('#percents').text(percents + ' грн')
	$('#cashback').text(cashback + ' грн')


})