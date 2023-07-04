/* This example requires Tailwind CSS v2.0+ */
import Menu from "./menu"
import React from "react";

export default function Filters({ seasons, teams, season, setSeason, hometeam, setHometeam, visitorteam, setVisitorteam, onFilter, onReset }) {
  return (
    <div className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Filters</h1>
          <p className="mt-2 text-sm text-gray-700">
            Select the filters you would like to apply to filter games.
          </p>
        </div>
      </div>
      <div className="-mx-4 mt-10 sm:-mx-6 md:mx-0 md:rounded-lg" >
        <Menu
          menuLabel="Season"
          menuOptions={seasons}
          selected={season}
          setSelected={setSeason}
        />
      </div>
      <div className="-mx-4 mt-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <Menu
          menuLabel="Home Team"
          menuOptions={teams}
          selected={hometeam}
          setSelected={setHometeam}
        />
      </div>
      <div className="-mx-4 mt-5 sm:-mx-6 md:mx-0 md:rounded-lg">
        <Menu
          menuLabel="Visitor Team"
          menuOptions={teams}
          selected={visitorteam}
          setSelected={setVisitorteam}
        />
      </div>

      <div className="text-center -mx-4 mt-10 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
        <button
          onClick={onFilter}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Filter
        </button>
      </div>

      <div className="text-center -mx-4 mt-2 ring-gray-300 sm:-mx-6 md:mx-0 md:rounded-lg">
        <button
          onClick={onReset}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
