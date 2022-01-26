import React from 'react'

export default function Roles({role}) {
    return (
        <button type="button" className="py-3 px-5 text-lg border-2 border-indigo-400 hover:text-white hover:bg-indigo-400 hover:shadow-sm transition-all uppercase" aria-pressed={true}>
          <span>{role}</span>
        </button>
    )
}
