import makeAnimated from 'react-select/animated';
import AsyncSelect, { useAsync } from 'react-select/async';
import {getLocation, LOCATION_API_URL, location_options} from "../../api/location.js";
import {useCallback, useEffect, useMemo, useState} from "react";
import debounce from 'debounce-promise';
import Select from "react-select";
import {AsyncPaginate} from "react-select-async-paginate";
const Search = ({onSearchChange}) => {

    const animatedComponent = makeAnimated();

    const [searchQuery, setSearchQuery] = useState('');



    const sendLocationRequest = async (value) => {
        const response = await fetch(`${LOCATION_API_URL}?namePrefix=${value}`, location_options);
        const body = await response.json();
        const option = body.data.map(item => {
            return {
                label: `${item.name}, ${item['country']}`,
                value: [item.latitude, item.longitude],
            }
        });
        return option;
    }

    function handleChange(value) {
        setSearchQuery(value);
        onSearchChange(value);
    }

    const loadOption = async (inputValue) => {
        const optionsValue = await sendLocationRequest(inputValue);
        return {
            options: optionsValue,
        }
    }


    return (
        <div>

            <AsyncPaginate
                value={searchQuery}
                onChange={handleChange}
                loadOptions={loadOption}
                unstyled
                components={animatedComponent}
                debounceTimeout={600}
                placeholder='Search for a city'
                styles={{
                    control: (baseStyles, state) => {
                        return {
                            background: 'linear-gradient(180deg, rgba(46, 51, 90, 0.26) 1.62%, rgba(28, 27, 51, 0.26) 95.72%)',
                            borderRadius: '12px',
                            boxShadow: 'inset 0px 4.95102px 4.95102px rgba(0, 0, 0, 0.25)',
                            color: 'rgba(235, 235, 245, 0.6)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '15px 20px',
                            fontWeight: 'lighter',
                            border: state.isFocused ? '2px solid #48319D' : '2px solid transparent',
                        }
                    },
                    menu: () => {
                        return {
                            borderRadius: '12px',
                            marginTop: '10px',
                            padding: '15px 20px',
                            background: 'linear-gradient(180deg, rgba(46, 51, 90, 0.26) 1.62%, rgba(28, 27, 51, 0.26) 95.72%)',
                            boxShadow: 'inset 0px 4.95102px 4.95102px rgba(0, 0, 0, 0.25)',
                            color: 'rgba(235, 235, 245, 0.6)',
                        }
                    },
                    menuList: () => {
                        return {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1px',
                        }
                    },
                    option: (basedStyle, state) => {
                        return {
                            cursor: 'pointer',
                            borderRadius: '12px',
                            padding: '10px',
                            ":hover": {background: 'rgba(89, 54, 180, 80%)'}
                        }
                    },

                }}
            />
        </div>
    );
};

export default Search;