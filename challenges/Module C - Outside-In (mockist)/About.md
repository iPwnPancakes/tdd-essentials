# Outside-In

> This is about Behaviour Verification (outgoing adapters)

> This drives the need for us to learn about things like spies, stubs, mocks, and so on. Very good.


> Notes: For you to be successful with outside-in, you're going to HAVE TO be aware of what your collaborators are. Therefore, if you're coding from the perspective of a Use Case, you need to be aware of where this concept exists within the context of a layered architecture. Understand? Here, we're modelling controllers that CERTAINLY need to talk to collaboratos which we donnnnnnt want to allow to actually write or make REAL calls to things. That's what we're highlighting here. So yes, there are a few things which must be cleared up first before we can excel at this.

> Notes: And if you're coding from the very outer boundary (we're going to do that in the next section), you need to 100% be aware of what the boundary is - know what the actors at play are, who is invoking the command-like behaviour? A `network request` or a `client` against a `server`? A `human` against a `UI`? A `client` against a `CLI`? This must be clear to do outside in.

> This may very well be the module that forces me to teach the students about the Hexgonal Architecture properly now. Good, looks like we're going to get into it naturally. Incoming & Outgoing Adapters. Nice. A few different patterns you'll need to learn here. Like, how to wrap APIs in adapters/facades, dependency inversion, etc. 

> This one will probably just be about OUTGOING adapters