$(document).ready(function () {
    let checkboxes = $("input[type='checkbox']"),
        submitButt = $("#good_deeds_submit_btn");
    checkboxes.click(function () {
        submitButt.attr("disabled", !checkboxes.is(":checked"));
    });
    let feedback_btn = document.getElementById("feedback_btn");
    let feedback_close_btn = document.getElementById("feedback_close_btn");
    let feedback_body = document.getElementById("feedback_body");
    let feedback_text = document.getElementById("feedback_text");
    //feedback_body.style.display = "none";
    feedback_btn.addEventListener("click", function () {
        feedback_btn.style.display = "none";
        feedback_body.style.display = "block";
        window.scrollTo(0, document.body.scrollHeight);
        feedback_text.focus();
    });
    feedback_close_btn.addEventListener("click", function () {
        feedback_btn.style.display = "block";
        feedback_body.style.display = "none";
    });
});
