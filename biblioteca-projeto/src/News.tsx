import {useStyles} from './Styles'
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LinkIcon from '@mui/icons-material/Link';
import EventIcon from '@mui/icons-material/Event';

const News = ({autor, tittle, url,create} : any) => {
    const styles = useStyles();
    return (
        <div className={styles.News}>
            <span><PersonIcon fontSize="small"/>{autor}<br/></span>
            <span><LibraryBooksIcon fontSize="small"/>{tittle}<br/></span>
            <span><LinkIcon fontSize="small"/><a href={url}>{url}</a></span>
            <br/>
            <data><EventIcon fontSize="small"/>{create}</data>
        </div>
    )
}
export default News;