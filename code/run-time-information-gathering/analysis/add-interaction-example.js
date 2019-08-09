let a = new ArgumentContainer();

let i1 = new MethodCallInteraction();
a.addInteraction(i1);

let i2 = new GetFieldInteraction();
i1.addInteraction(i2);