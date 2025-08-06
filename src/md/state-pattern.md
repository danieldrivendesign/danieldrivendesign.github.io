# The State Pattern in C#

The **State pattern** lets an object change its behavior when its internal state changes.  
Think of it as replacing large `switch` or `if` blocks with small classes.

---

## When to Use

- An object needs to show different behavior based on a runtime condition.
- You keep adding `if` statements for new states.
- You want each state’s code in one place, not scattered.

---

## Key Parts

| Role              | Job                                                             |
|-------------------|-----------------------------------------------------------------|
| **Context**       | Holds a reference to a `State` object. Delegates work.          |
| **State**         | Interface or abstract class. Declares methods all states share. |
| **ConcreteState** | One class per state. Implements the behavior.                   |

## Simple Example

1. Define the `State` interface

```csharp
public interface IState
{
    void Handle(VendingMachine context);
}
```

2. Concrete states

```csharp
public class NoCoinState : IState
{
    public void Handle(VendingMachine context)
    {
        Console.WriteLine("Insert coin first.");
        // When coin inserted:
        context.SetState(new HasCoinState());
    }
}

public class HasCoinState : IState
{
    public void Handle(VendingMachine context)
    {
        Console.WriteLine("Dispensing item.");
        context.SetState(new SoldState());
    }
}

public class SoldState : IState
{
    public void Handle(VendingMachine context)
    {
        Console.WriteLine("Please take your item.");
        context.SetState(new NoCoinState());
    }
}
```

3. The Context class

```csharp
public class VendingMachine
{
    private IState _state;

    public VendingMachine()
    {
        _state = new NoCoinState(); // default
    }

    public void SetState(IState state) => _state = state;

    public void Request() => _state.Handle(this);
}
```


4. Use it


```csharp
var machine = new VendingMachine();

machine.Request(); // "Insert coin first."
machine.Request(); // "Dispensing item."
machine.Request(); // "Please take your item."
```

---


## Benefits

- **Cleaner code**  
  Each state lives in its own class.
- **Open for extension**  
  Add a new state without touching old ones.
- **Single Responsibility**  
  A state class has one job: handle that state.


---


## Drawbacks

- **More classes**  
  Small systems might feel cluttered.
- **Can be overkill**  
  If there are only two simple states, an `if` may be fine.


---


## Tips

1. Keep state objects stateless if you can.
2. Store shared data in the context.
3. Use `enum` + dictionary of states for quick lookup.
4. Inject states via DI if you need test doubles.


---


## Summary

The State pattern helps you avoid condition-heavy code.  
In C#, it’s straightforward: define an interface, create separate state classes, and let the context delegate work.  
Use it when behavior truly depends on state and your `if` blocks are getting out of hand.