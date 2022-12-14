import { useState } from 'react';
import styles from './styles.module.css';
import SearchIcon from './searchIcon.svg';
import { useAppContext } from '../../contexts/app';
type Props = {    
    onSearch: (serachValue: string) => void;
}

export const Searchinput = ({ onSearch }: Props) => {
const { tenant } = useAppContext();

    const [focused, setFocused] = useState(false);
    const [serachValue, setSearchValue] = useState(' ');

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        //if (event.code === 'Enter') {
            onSearch(serachValue);
       // }

    }

    return (
        <div
            className={styles.container}
            style={{ borderColor: focused ? tenant?.mainColor : '#FFFFFF' }}
        >
            <div
                className={styles.button}
                onClick={() => onSearch(serachValue)}
            >
                <SearchIcon color={tenant?.mainColor}/>
            </div>
            <input
                type='text'
                className={styles.input}
                placeholder='Digite o nome do produto'
                onFocus={() => { setFocused(true) }}
                onBlur={() => { setFocused(false) }}
                onKeyUp={handleKeyUp}
                value={serachValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>
    );
}