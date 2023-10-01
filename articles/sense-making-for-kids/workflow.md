Workshop flow

``` dot
digraph G {
	compound=true;

  subgraph cluster_assessment {
    style=filled;
    color=lightgrey;
    node [style=filled,color=white];
    question1 -> question2 [label="correct"];
    label = "Assessment";
  }

  subgraph cluster_training {
    node [style=filled,color=white];
    module1 -> module2;
    label = "Training";
    style=filled;
    color=lightgrey;
  }
  start -> question1;
	question1 -> module1 [label="wrong" lhead=cluster_training];
	question2 -> module2 [label="wrong" lhead=cluster_training];
	module2 -> question1 [lhead=cluster_training];
	question2 -> graduation [label="correct"] ;

  start;
  graduation;
}
```
