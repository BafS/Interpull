
var data = [
    {
        value: 0,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 0,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 0,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

angular.module('pull', [])
  .controller('PullController', function() {
    var pull = this;

    pull.dataa = [
        {
            value: 0,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 0,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 0,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
    ]

    pull.vote = function(num) {
      console.log("VOTE " + num);
      data[num].value++;
      // pull.todos.push({text:pull.todoText, done:false});
      // pull.todoText = '';
    };
});
