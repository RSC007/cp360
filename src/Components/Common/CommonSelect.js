import React from 'react'
import Select from 'react-select'

const CommonSelect = ({ options = [], isMultiSelect = false, component = null, onSelectCloseMenu = true, hideMenu = true, handleChange, value }) => {
    const selectOption = (options) => {
        if (!options.length) {
            return options
        }

        if (typeof options[0] === "string") {
            return options.map((val) => ({ value: val, label: val }))
        } else {
            const keys = Object.keys(options[0])
            return options.map((val) => ({ value: val, label: val[keys[0]] }))
        }
    }

    return (
        <>
            <div>
                <Select
                    options={selectOption(options)}
                    onChange={handleChange}
                    isMulti={isMultiSelect}
                    components={component}
                    closeMenuOnSelect={onSelectCloseMenu}
                    hideSelectedOptions={hideMenu}
                    value={value}
                />
            </div>
        </>
    )
}

export default CommonSelect