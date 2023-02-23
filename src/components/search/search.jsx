import classes from './search.module.css';
import makeAnimated from 'react-select/animated';
import Select from "react-select";
import AsyncSelect, { useAsync } from 'react-select/async';
const Search = (props) => {

    const animatedComponent = makeAnimated();


    const opt = [
        {value: 'apple', label: 'City 1'},
        {value: 'orange', label: 'City 2'},
        {value: 'banana', label: 'City 3'},
    ];


    const loadFunc = (inputValue) => {
         return new Promise(resolve => {
             setTimeout(() => {
                 resolve(opt);
             }, 5000);
         });
    }


    return (
        <div>
            <AsyncSelect
                defaultOptions
                loadOptions={loadFunc}
                components={animatedComponent}
                placeholder='Search for a city'
                unstyled
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