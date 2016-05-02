
if (document.querySelectorAll('#com-atlassian-confluence')) {

  console.log(" -- cf-auto-expander");
  
  /* jquery-based auto-expander */
  
  // $('.expand-control > .icon:not(.expanded)')
  //   .parent()
  //   .click();
  
  
  /* pure-js auto-expander      */
  
  []
    .slice.call(document.querySelectorAll('.expand-control > .icon:not(.expanded)'))
    .map(function (e) { return (e.parentNode); })
    .filter(function (e) { return (e !== null); })
    .forEach(function (e) { e.click(); });

}