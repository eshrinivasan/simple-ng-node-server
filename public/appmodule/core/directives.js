demoapp.directive('timeIndia', function() {
  return {
    template: "<div>Time in India right now is {{time | date:'medium':'+0530'}}</div>"
  };
});