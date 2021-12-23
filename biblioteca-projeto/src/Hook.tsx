import React from "react";
import {api} from "./providers" 
import News from './News'
import { TextField } from "@material-ui/core";
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from "./Styles";

export const ListAut: React.FC = () => {
    const styles = useStyles();
    const [search, setSearch] = React.useState('');
    const [news, setNews] = React.useState<any[]>([]);

    
    async function searchNews(){
        const response = await api.get('/v1/search?query='+ search);
        if(search===''){
            setNews([])
        }
        else{
            setNews(response.data.hits)
        }
    }
    
    return (
        <React.Fragment>
            <div className={styles.Body}>
                <h1>Biblioteca OBS</h1>
                <TextField id="outlined-basic" label="Busque seu autor ou livro" variant="outlined" onChange= {(e)=> setSearch(e.target.value)}/>
                <button className={styles.Button}   onClick = {searchNews}><SearchIcon/></button>
                {news.map(news=> (
                 <ul className= "Perfil" key={news.objectID}>
                    <News  autor= {news.author} tittle= {news.title} url= {news.url} create = {news.created_at}/>
                    </ul>
                ))}
            </div>
        </React.Fragment>
        
    );
}

export default ListAut;