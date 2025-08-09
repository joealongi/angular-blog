import { Component } from '@angular/core';

@Component({
  selector:
    'app-stateful-react-javascript-form-fields-through-redux-data-persistence-and-management',
  imports: [],
  templateUrl:
    './stateful-react-javascript-form-fields-through-redux-data-persistence-and-management.html',
  styleUrl:
    './stateful-react-javascript-form-fields-through-redux-data-persistence-and-management.css',
})
export class StatefulReactJavascriptFormFieldsThroughReduxDataPersistenceAndManagement {
  first = `
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
  `;
  second = `
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
  `;
  third = `
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
  `;
  fourth = `
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
  `;
  fifth = `
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
  `;
  sixth = `
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
  `;
}
