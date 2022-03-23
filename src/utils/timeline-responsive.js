(function () {
  "use strict";
  // define variables
  // var width = $(window).innerWidth();
  var width = window.innerWidth;
  var content = document.querySelector(".wrapper");
  var items = document.querySelectorAll(".timeline--wrapper ul.timeline li");
  var items_topvals = new Array(items.length).fill(0);
  var lowest_pt, prev_lowestpt;
  var pad;
  var side = true; // side = false for left of timeline; side = true for right of timeline

  function setTopPosition(idx) {
    var topval = 0;
    //   For iPad landscape upto desktop
    if (width > 768) {
      if (idx == 0) {
        lowest_pt = items[idx].clientHeight + pad;
        prev_lowestpt = pad;
      } else {
        var prev_box =
          items_topvals[idx - 1] + items[idx - 1].clientHeight + pad;
        // switch sides only for screens above iPad (portrait)
        if (prev_box >= lowest_pt) {
          side = !side; // switch sides
        }
        topval = prev_lowestpt;
        if (topval + items[idx].clientHeight + pad > lowest_pt) {
          prev_lowestpt = lowest_pt;
          lowest_pt = topval + items[idx].clientHeight + pad;
        } else {
          prev_lowestpt = topval + items[idx].clientHeight + pad;
        }
        var d = lowest_pt - prev_lowestpt;
        if (d < pad) {
          topval = topval + pad;
        }
      }
    } else {
      //   For mobile
      if (idx == 0) {
        lowest_pt = items[idx].clientHeight;
        topval = 0;
      } else {
        topval = lowest_pt;
        lowest_pt = topval + items[idx].clientHeight;
      }
    }

    return topval;
  }

  function setSideOfTimeline(side, idx) {
    var div = items[idx].firstElementChild;
    var dot = div.getElementsByClassName("dot")[0];
    var tooltip = div.getElementsByClassName("tooltip")[0];
    // set the margin-top of div to 10px
    div.style.marginTop = "10px";
    if (side) {
      // set dot on timeline
      dot.style.left = "-45px";
      // arrow pointing to timeline from rt-side
      tooltip.style.left = "-24px";
      tooltip.style.borderWidth = "12px 24px 12px 0";
      tooltip.style.borderColor = "transparent #f7f7f3 transparent transparent";
      // set box on right of timeline
      div.style.left = "38px";
    } else {
      // set dot on timeline
      dot.style.left = "424px";
      // arrow pointing to timeline from lft-side
      tooltip.style.left = "400px";
      tooltip.style.borderWidth = "12px 0 12px 24px";
      tooltip.style.borderColor = "transparent transparent transparent #f7f7f3";
      // set box on left of timeline
      div.style.left = "-431px";
    }
  }

  function callbackFunc() {
    // set pad to 5 for mobile + ipad (portrait) screens
    if (width > 768) {
      pad = 60;
    } else {
      pad = 0;
    }

    for (var i = 0; i < items.length; i++) {
      items_topvals[i] = setTopPosition(i);
      items[i].style.top = items_topvals[i] + "px";

      setSideOfTimeline(side, i);
    }

    items.forEach(item => {
      item.style.visibility = "visible";
    });

    var timeline_wrapper_height = lowest_pt + 60;
    content.style.height = timeline_wrapper_height + "px";

  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
})();
