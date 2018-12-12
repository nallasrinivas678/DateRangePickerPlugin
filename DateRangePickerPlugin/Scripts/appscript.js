$(document).ready(function () {


    $("#SampleDateRange").datepicker({
        endDate: "0d",
        maxViewMode: 3,
        autoclose: true,
        todayHighlight: true,
        forceParse: false,
        format: 'mm/dd/yyyy',
        orientation: "bottom"
    });

    $(document).on("keypress", ".todaydate", function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            Today(this);
            return false;
        }
    });

    $(document).on("keypress", ".yesterday", function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            Yesterday(this);
        }
    });

    $(document).on("keypress", ".Last7Days", function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            Last7days(this);
        }
    });

    $(document).on("keypress", ".Last30Days", function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            Last30Days(this);
        }
    });

    $(document).on("keypress", ".ThisMonth", function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            ThisMonth(this);
        }
    });

    $(document).on("keypress", ".LastMonth", function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            LastMonth(this);
        }
    });

    $(document).on("keypress", ".LastWeek", function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            LastWeek(this);
        }
    });

    $(document).on("keypress", ".clearDates", function (event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if (code === 13) {
            clearDates(this);
        }
    });

    //set startDate,endDate in dateRangeFields & Add to the Selected Criteria at the top
    //set focus on next Field in the form.(if next Filed again dateRange it will focus on Today's Date Icon.
    function setDateAddCriteriaFocusonNextField(startdate, enddate, dateRangeFields, $this) {
        //SingleDate Input
        $("[name='" + dateRangeFields[0].name + "']").datepicker('setDate', startdate).datepicker('fill');
        //If DateRange Input
        if (dateRangeFields.length > 1)
            $("[name='" + dateRangeFields[1].name + "']").datepicker('setDate', enddate).datepicker('fill');
    }

    // Date RangePicker Functions Today,Yesterday,Last 7 Days,Last week,Last 30 Days,This Month,Last Month
    function Today($this) {
        var today = moment(new Date()).format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').find('input');
        setDateAddCriteriaFocusonNextField(today, today, dateRangeFields, $this);
    }
    function Tomorrow($this) {
        var tomorrow = moment().add(1, 'days').format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(tomorrow, tomorrow, dateRangeFields, $this);
    }
    function Yesterday($this) {
        var yesterday = moment().subtract(1, 'days').format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(yesterday, yesterday, dateRangeFields, $this);
    }
    function Last7days($this) {
        var startDate = moment().subtract(6, 'days').format('MM/DD/YYYY');
        var endDate = moment(new Date()).format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, $this);
    }
    function Next7days($this) {
        var startDate = moment(new Date()).format('MM/DD/YYYY');
        var endDate = moment().add(6, 'days').format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, $this);
    }
    function Last30Days($this) {
        var startDate = moment().subtract(29, 'days').format('MM/DD/YYYY');
        var endDate = moment(new Date()).format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, $this);
    }
    function Next30Days($this) {
        var startDate = moment(new Date()).format('MM/DD/YYYY');
        var endDate = moment().add(29, 'days').format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, $this);
    }
    function LastWeek($this) {
        var startDate = moment().subtract(1, 'week').startOf('week').format('MM/DD/YYYY');
        var endDate = moment().subtract(1, 'week').endOf('week').format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, $this);
    }
    function NextWeek($this) {
        var startDate = moment().add(1, 'week').startOf('week').format('MM/DD/YYYY');
        var endDate = moment().add(1, 'week').endOf('week').format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, $this);
    }
    function ThisMonth($this) {
        var startDate = moment().startOf('month').format('MM/DD/YYYY');
        var endDate = moment(new Date()).format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, $this);
    }
    function LastMonth($this) {
        var startDate = moment().subtract(1, 'month').startOf('month').format('MM/DD/YYYY');
        var endDate = moment().subtract(1, 'month').endOf('month').format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, $this);
    }
    function NextMonth($this) {
        var startDate = moment().add(1, 'month').startOf('month').format('MM/DD/YYYY');
        var endDate = moment().add(1, 'month').endOf('month').format('MM/DD/YYYY');
        var dateRangeFields = $($this).closest('div').siblings('input');
        setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, $this);
    }
    function clearDates($this) {
        $($this).closest('.input-group').find('input').val('').trigger('change');
        var dateRangeFields = $($this).closest('div').find('input');
        setDateAddCriteriaFocusonNextField("", "", dateRangeFields, $this);
    }
    function clearDatesForDobFields($this) {
        //$("#" + $($this).closest('div')[0].id).datepicker('setDate', '').datepicker('fill');
        //$("#" +$($this).closest('div')[0].id).datepicker('destroy', '', '');
        var dateRangeFields = $($this).closest('div').find('input');
        //setDateAddCriteriaFocusonNextField("", "", dateRangeFields, $this);
        $("#" + dateRangeFields[0].id).val("").trigger('change');
    }
    function focusnextformelement($this) {
        //To focus on next element if next element is date range
        var el = $($this).closest('.form-group').next('.form-group').find('.todaydate');
        if (el.length === 0) {
            //if next element is form control in this div or next div
            var divlocation = $($this).closest('.form-group').next('.form-group').find('.form-control');
            if (divlocation.length !== 0) {
                divlocation.focus();
            } else {
                var ele = $($this).closest('.form-group').parent().next('.col-md-4');
                if (ele.length !== 0) $($this).closest('.form-group').parent().next('.col-md-4').find('.form-group').first('.form-control').focus();
            }
        }
        else {
            el.focus();
        }
    }

    function SingleYesterday($this) {
        var yesterday = moment().subtract(1, 'days').format('MM/DD/YYYY');
        var input = $($this).closest('div').siblings('input');
        $("#" + input[0].id).datepicker('setDate', yesterday).datepicker('fill');
    }

    function SingleTomorrow($this) {
        var tomorrow = moment().add(1, 'days').format('MM/DD/YYYY');
        var input = $($this).closest('div').siblings('input');
        $("#" + input[0].id).datepicker('setDate', tomorrow).datepicker('fill');
    }
    function clearSingleDates($this) {
        $($this).closest('.input-group').find('input').val('').trigger('change');
    }
    function SingleToday($this) {
        var today = moment(new Date()).format('MM/DD/YYYY');
        var input = $($this).closest('div').find('input');
        $("#" + input[0].id).datepicker('setDate', today).datepicker('fill');
    }

    function FormatDateTommddyyy(date) {
        return date.substring(0, 2) + "/" + date.substring(2, 4) + "/" + date.substring(4, 8);
    }
    function ValidateStartDate(startDate, endDate, dateRangeFields) {
        if (startDate === "") {
            setDateValues("", "", dateRangeFields);
        }
        if (startDate.length === 8) {
            startDate = FormatDateTommddyyy(startDate);
        }
        if (startDate.length === 10 && moment(startDate).isValid()) {
            setDateAddCriteriaFocusonNextField(startDate, startDate, dateRangeFields, null);
            setDateValues(startDate, startDate, dateRangeFields);
        }
    }
    function ValidateEndDate(endDate, startDate, dateRangeFields) {
        if (endDate === "") {
            setDateValues("", "", dateRangeFields);
        }
        if (endDate.length === 8) {
            endDate = FormatDateTommddyyy(endDate);
        }
        if (endDate.length === 10 && moment(endDate).isValid() && moment(endDate).isAfter(startDate)) {
            setDateAddCriteriaFocusonNextField(startDate, endDate, dateRangeFields, null);
            setDateValues(startDate, endDate, dateRangeFields);
        }
        if (endDate.length === 10 && moment(endDate).isValid() && moment(startDate).isAfter(endDate)) {
            setDateAddCriteriaFocusonNextField(startDate, startDate, dateRangeFields, null);
            setDateValues(startDate, startDate, dateRangeFields);
        }
    }
    function setDateValues(startDate, endDate, dateRangeFields) {
        $("#" + dateRangeFields[0]).val(startDate);
        $("#" + dateRangeFields[1]).val(endDate);
    }

});