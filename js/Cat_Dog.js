$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#Cat").prepend("<img src='http://vignette1.wikia.nocookie.net/dofus/images/7/79/Woolly_Bow_Meow.png/revision/latest?cb=20100710185806'><li>MEOW!</li>");
    $("ul#Dog").prepend("<img src='http://rs768.pbsrc.com/albums/xx325/xlittlesqueaksx/Woof.jpg~c200'><li>woof woof</li>");

    $("ul#Cat").children("li").first().click(function() {
      alert('hi');
    });
    $("ul#Dog").children("li").first().click(function() {
     alert('hi');
    });

    $("ul#Cat").children("li").first().click(function() {
    $(this).remove();
    });
  $("ul#Dog").children("li").first().click(function() {
    $(this).remove();
    });
  });


  $("button#goodbye").click(function() {
    $("ul#Cat").prepend("<li>I'm going to eat your face.</li>");
    $("ul#Dog").prepend("<li>What's up, evil?</li>");

    $("ul#Cat").children("li").first().click(function() {
      alert('hi');
    });
    $("ul#Dog").children("li").first().click(function() {
     alert('hi');
    });

    $("ul#Cat").children("li").first().click(function() {
    $(this).remove();
    });
  $("ul#Dog").children("li").first().click(function() {
    $(this).remove();
    });
  });


  $("button#stop").click(function() {
    $("ul#Cat").prepend("<li>good morning</li>");
    $("ul#Dog").prepend("<li>but i don't enjoy mornings</li>");

    $("ul#Cat").children("li").first().click(function() {
      alert('hi');
    });
    $("ul#Dog").children("li").first().click(function() {
     alert('hi');
    });

    $("ul#Cat").children("li").first().click(function() {
    $(this).remove();
    });
  $("ul#Dog").children("li").first().click(function() {
    $(this).remove();
    });
  });
});
