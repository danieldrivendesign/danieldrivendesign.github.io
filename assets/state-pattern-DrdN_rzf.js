const n=`# The State Pattern in C#\r
\r
The **State pattern** lets an object change its behavior when its internal state changes.  \r
Think of it as replacing large \`switch\` or \`if\` blocks with small classes.\r
\r
---\r
\r
## When to Use\r
\r
- An object needs to show different behavior based on a runtime condition.\r
- You keep adding \`if\` statements for new states.\r
- You want each state’s code in one place, not scattered.\r
\r
---\r
\r
## Key Parts\r
\r
| Role              | Job                                                             |\r
|-------------------|-----------------------------------------------------------------|\r
| **Context**       | Holds a reference to a \`State\` object. Delegates work.          |\r
| **State**         | Interface or abstract class. Declares methods all states share. |\r
| **ConcreteState** | One class per state. Implements the behavior.                   |\r
\r
## Simple Example\r
\r
1. Define the \`State\` interface\r
\r
\`\`\`csharp\r
public interface IState\r
{\r
    void Handle(VendingMachine context);\r
}\r
\`\`\`\r
\r
2. Concrete states\r
\r
\`\`\`csharp\r
public class NoCoinState : IState\r
{\r
    public void Handle(VendingMachine context)\r
    {\r
        Console.WriteLine("Insert coin first.");\r
        // When coin inserted:\r
        context.SetState(new HasCoinState());\r
    }\r
}\r
\r
public class HasCoinState : IState\r
{\r
    public void Handle(VendingMachine context)\r
    {\r
        Console.WriteLine("Dispensing item.");\r
        context.SetState(new SoldState());\r
    }\r
}\r
\r
public class SoldState : IState\r
{\r
    public void Handle(VendingMachine context)\r
    {\r
        Console.WriteLine("Please take your item.");\r
        context.SetState(new NoCoinState());\r
    }\r
}\r
\`\`\`\r
\r
3. The Context class\r
\r
\`\`\`csharp\r
public class VendingMachine\r
{\r
    private IState _state;\r
\r
    public VendingMachine()\r
    {\r
        _state = new NoCoinState(); // default\r
    }\r
\r
    public void SetState(IState state) => _state = state;\r
\r
    public void Request() => _state.Handle(this);\r
}\r
\`\`\`\r
\r
\r
4. Use it\r
\r
\r
\`\`\`csharp\r
var machine = new VendingMachine();\r
\r
machine.Request(); // "Insert coin first."\r
machine.Request(); // "Dispensing item."\r
machine.Request(); // "Please take your item."\r
\`\`\`\r
\r
---\r
\r
\r
## Benefits\r
\r
- **Cleaner code**  \r
  Each state lives in its own class.\r
- **Open for extension**  \r
  Add a new state without touching old ones.\r
- **Single Responsibility**  \r
  A state class has one job: handle that state.\r
\r
\r
---\r
\r
\r
## Drawbacks\r
\r
- **More classes**  \r
  Small systems might feel cluttered.\r
- **Can be overkill**  \r
  If there are only two simple states, an \`if\` may be fine.\r
\r
\r
---\r
\r
\r
## Tips\r
\r
1. Keep state objects stateless if you can.\r
2. Store shared data in the context.\r
3. Use \`enum\` + dictionary of states for quick lookup.\r
4. Inject states via DI if you need test doubles.\r
\r
\r
---\r
\r
\r
## Summary\r
\r
The State pattern helps you avoid condition-heavy code.  \r
In C#, it’s straightforward: define an interface, create separate state classes, and let the context delegate work.  \r
Use it when behavior truly depends on state and your \`if\` blocks are getting out of hand.`;export{n as default};
