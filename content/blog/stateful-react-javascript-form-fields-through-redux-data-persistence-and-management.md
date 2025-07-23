# Stateful React JavaScript form fields through Redux data persistence and management

## Modular forms in React (TypeScript) with Formik and Redux (Toolkit)

A core competency in modern programming is understanding a frameworks ability to accept, process, and store data in the application which advances the user experience. All advice is temporal, although you can find many methods and means to organizing an efficient User Experience (UX) with vanilla JavaScript, adding in a framework can enhance that capability \* 10.

Working through modern JavaScript frameworks enables the repetition of structured code in the form of components, this is a principal found across programming, almost a subtlety that evolves in each language. The idea of a component and higher order component seems to have branched from the idea of a sub class and a super class.

In a super-like fashion we have two data structures, where one falls under the next, cascading, where each can have their own functionality independently, but share a constant knowledge. The value here is simplification of code where by repeating a declaration, allows us to avoid repeating lines of code. Observability, maintenance, and overall complexity is reduced when forming two constants that have a super class then a sub class relationship, sharing data through inheritance.

### Statelessly passing information in React

In [React.js](https://react.dev/) there is a core concept called [props or properties](https://react.dev/learn/passing-props-to-a-component), these are values which allow us to bind data from one file of code and pass it to the next in a one-way model. As you can see in the documentation, these props, an enlightened set of attributes that are available from upstream to pass downstream in the Virtual [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Glossary/DOM) tree.

Commonly you will see components split out into separate files, like the below code block, which allows for a best practice called [code splitting](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting), in turn enhancing the application rendering.

```javascript
// Super Class - Glass.jsx
import Water from "./Water.jsx";

export default function Glass() {
  return (
  	<Water full={1}/>
  );
}

--- Different Files ---

// Sub Class - Water.jsx
export function Water({full}) {
  return (
    <div>
    	{ full > 0.5 ? "full" : "empty"; }
    </div>
  );
}
```

A [ref, reference, or useRef hook](https://react.dev/reference/react/useRef) provides the ability to consume Virtual DOM events from the given html element that it is pointing to. There also exists, a method of referencing downstream events, where we pass an event listener in a React.js format to the sub class as reference for the super class through props.

```javascript
// Class - Form.jsx
import { useRef } from 'react';

function Form() {
  const formRef = useRef(null)

  function handleSubmit() {
    const data = formRef.current;
    console.log('Name: ', data.name.value);
  }

  return (
    <form ref={formRef}>
      <label for="fname">Name:</label>
        <input type="text" id="name" name="name" onChange={handleChange}>
      <button type="submit" onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}
```

As these two points of the framework exist, props and refs, which allow us to add html attributes through React.js and consume events we have selected to listen; we can quickly bootstrap a method of creating a small data pipeline between higher order and lower level components.

### Statefully passing information in React

In the initial form of React.js there was a more structural configuration that required you to move the various components of your classes through a lifecycle. A lot of this lifecycle became blended into the hooks library, these states or snapshots of the React.js lifecycle, enable the interface to interact with the user as they interact with the interface.

The [state or useState hook](https://react.dev/learn/updating-objects-in-state) enables the capture of data within the current lifecycle of the React.js component, when this component is loaded or mounted in the Virtual DOM, and until it is no longer rendered, or forcefully reloaded through user action. As we know from navigation in the browser, which in classic websites is often a page reload then a load of a new file to the DOM, is not so common in modern applications.

In React.js, we are able to load new components throughout the lifecycle without loading the page due to the Virtual DOM without impacting the DOM. This virtualization affords us more complexity in the transition of code, data, and components. We have to build to emulate this data coupling when thinking through the requirements of the system, where components needn't live longer than there data and vice versa.

Long story short, all of this new technical freedom lead to libraries for state management, which at the time were very complex and elaborate in tandem with the previous class and constructor composition. Where this became very fickle was managing state between components and all the code it would take to share information across the app, assuming this was the motivation, [Dan Abramov](https://danabra.mov/) and [Andrew Clark](https://andrewclark.io/) created a library that is quite prominent, called [Redux](https://redux.js.org/). As big as the components were, adding any state management library felt like configuring an enterprise network to enable bi-lateral data or two-way binding between the various pages and components of the application.

Play Video

Fast-forward to now, you can skip a lot of the clunkier code and use state libraries much like the way you can access the lifecycle methods, through hooks. The now slimmer and Meta adapted library, which became [Redux Toolkit](https://redux-toolkit.js.org/), is a very powerful tool for component inheritance, and logic considerations throughout the application.

In this sense, when applying this package or framework, we incorporate an application wide store, which more or less stores data. In the below code block, an example of a real world plus/minus example.

```javascript
import React from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrementHome, incrementHome } from "./homeSlice";
import { decrementAway, incrementAway } from "./awaySlice";

export function Scoreboard() {
  const home = useSelector((state: RootState) => state.home.value);
  const away = useSelector((state: RootState) => state.away.value);
  const dispatch = useDispatch();

  return (
    <div>
        <p>Scoreboard</p>
        <span>Home: {home}</span>
        <span>Away: {away}</span>
        <div>
          <button
          aria-label="Increment home"
          onClick={() => dispatch(incrementHome())} >
            Increment Home
          </button>
          <button
          aria-label="Decrement away"
          onClick={() => dispatch(decrementHome())} >
            Decrement Home
          </button>
          <button
          aria-label="Decrement away"
          onClick={() => dispatch(incrementAway())} >
            Increment Away
          </button>
          <button
          aria-label="Decrement away"
          onClick={() => dispatch(decrementAway())} >
            Decrement Away
          </button>
        </div>
    </div>
  );
}
```

As you can see, this application can in place update the data, while rendering it dynamically all without reloading the page, which is a quintessential feature of React.js. Through the addition of this library, instead of rendering only when the updated component is currently mounted in the Virtual DOM, we can use this data throughout the dynamic routing and across the application, until it is reloaded or reset. We get to escape the [React Lifecycle](https://react.dev/learn/lifecycle-of-reactive-effects), even if for the moment which enables us to move further with a few extra tools.

### Consuming information in React and stateful persistence

Now that we have unpacked the metaphorical toolbox, we can compose super and subclasses, mutate the Virtual DOM, and statefully access the data throughout the application. I think it makes sense looking at these as pieces, to me "[The whole is greater than the sum of its parts.](https://www.goodreads.com/quotes/20103-the-whole-is-greater-than-the-sum-of-its-parts)" is how I have learned quite a lot, I tag these as pieces in my mind, and see how they fit together as more.

The whole problem statement we are really looking at here is that there isn't quite an obvious way to extract data from a sub class and present it to the super class, to take an action in the class without creating a blocker. The blocker that evolves here, is that you potentially need to access the data from a dynamic number of sub classes into a constant super class and respectively attribute the data into one joined output.

In the GitHub Gist below, you will see as an example of a login form and a submit form, as the sub classes, and a page called logon as the super class. These breadcrumbs provide the modularity to enable multiple pages to draw from a similar schema and invoke different combinations of outcomes, reusing effective logic across them.

```javascript
import * as React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import Branding from "../branding/Branding";
import { logon } from "../../redux/slices/formSlice";

export default function LogonForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: () => {},
  });

  React.useEffect(() => {
    dispatch(logon(formik?.values));
  }, [dispatch, formik?.values]);

  return (
    <React.Fragment>
      <section className="block h-auto w-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-nowrap justify-center"
        >
          <Branding />
          <h3 className="block my-3 font-slab text-3xl font-medium subpixel-antialiased text-light">
            Logon
          </h3>
          <label
            htmlFor="email"
            className="block my-3 font-roboto text-lg font-normal subpixel-antialiased text-bright"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik?.values?.email}
            className="block p-3 font-roboto font-normal subpixel-antialiased text-bright border border-light rounded bg-transparent"
          />
          <label
            htmlFor="password"
            className="block my-3 font-roboto text-lg font-normal subpixel-antialiased text-bright"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik?.values?.password}
            className="block p-3 font-roboto font-normal subpixel-antialiased text-bright border border-light rounded bg-transparent"
          />
        </form>
      </section>
    </React.Fragment>
  );
}
```

[All of the form fields are belong to Redux - Consuming information in React and stateful persistence - Login Form](https://gist.github.com/heyitsjoealongi/452d499403e6717b158006fed9a9360e)

In the above Gist, the familiar HTML elements for labels, inputs, and the [form element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) itself are present in the React.js component using [a package called Formik](https://formik.org/), which bakes in its own lifecycle hooks. The hooks presented by Formik allow for escaping the requirements of adding selectors and queries to get the values of the form inputs. In the various form elements, we catalyze the Formik object values, in a JSON format to pass the values through Redux toolkit, with the dispatch method to store the values in the application.

```javascript
import * as React from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

export default function SubmitForm({ handleSubmit }: any) {
  const form = useSelector((state: RootState) => state.form.value);

  const handleSubmitForm = async (form: any) => {
      return await handleSubmit(form);
  };

  const formik = useFormik({initialValues: {},onSubmit: () => {
      return handleSubmitForm(form);
    },
  });

  return (
    <React.Fragment>
      <section className="block h-auto w-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col flex-nowrap justify-center mt-9"
        >
          <button
            type="submit"
            className="block w-full p-3 mx-auto font-slab uppercase text-xl min-[2000px]:text-2xl font-bold subpixel-antialiased text-darkoff border border-light rounded bg-light hover:text-light hover:bg-darkoff hover:border-light active:text-light active:bg-darkoff active:border-light"
          >
          Submit
          </button>
        </form>
      </section>
    </React.Fragment>
  );
}
```

[All of the form fields are belong to Redux - Consuming information in React and stateful persistence - Submit Form](https://gist.github.com/heyitsjoealongi/a3381c16839d3ebfbb57e9c4600bdabc)

As an independent form, the submit button which triggers the system of forms to pass their values to a final function, starts from this sub class and involves the other sub class forms, along with the page which aligns as the super class. [The submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) is what invokes this sequence of events in a way that enables and serves the snapshot of data across forms. Implementing the selector method of Redux toolkit to consume the Formik values which are stored on change in the application, the submit button has the responsibility of passing the values to the super class. As a prop or property based function, which the submit button returns the values as a snapshot of the information entered at the time the button is clicked.

```javascript
import * as React from "react";
import { useNavigate } from "react-router";
import LogonForm from "../components/forms/Logon";
import SubmitForm from "../components/forms/Submit";
import { supabase } from "../supabase/supabase";

export default function LogonPage() {
  const navigate = useNavigate();

  const handleSubmit = async (form: any) => {
    try {
      const logon = await supabase.auth.signInWithPassword({
        email: form?.logon?.email,
        password: form?.logon?.password,
      });
      if (logon?.data?.session?.access_token !== null) {
        navigate("/account");
      }
    } catch (error: any) {
      console.log("Logon error (caught)", error?.error_description || error?.message);
    }
  };

  return (
    <React.Fragment>
      <LogonForm />
      <SubmitForm handleSubmit={handleSubmit} />
    </React.Fragment>
  );
}
```

[All of the form fields are belong to Redux - Consuming information in React and stateful persistence - Logon Page](https://gist.github.com/heyitsjoealongi/0baa6d1a9204de50695338331a71b614)

On the logon page, we consume the data from the function passed down to the submit sub class, and submit that to the auth provider, in this case, we are using the [Supabase - Sign in a user API](https://supabase.com/docs/reference/javascript/auth-signinwithpassword) and platform to provide authentication and authorization. As a result of authentication we can allow the user to progress through dynamic routing from [Remix - React Router](https://remix.run/docs/en/main/discussion/react-router) or stay to re-submit their username and password with notification or validation errors.

As a final thought, we know that now the ability to join all of this data and invoke the submission is possible across multiple components, which isn't inherently possible or obviously configurable in React.js alone. The next step for this position is to decide how to persist this data, if required when the page is hard reloaded or we change the state of the current users client/browser.

There are options to install packages like [redux-persist](https://github.com/rt2zz/redux-persist#readme), which overtime may not be maintained and support changes across libraries. In other scenarios where you need immediate reliability from your own confidence, moving these JSON objects into the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) can escape the regular lifecycle of browser navigation. Even further and if needed, storing the session in a database for retrieval and update is also quite pragmatic and enduring.
