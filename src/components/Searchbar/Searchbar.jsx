// import PropTypes from 'prop-types';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { SearchbarStyled, FormGroup, FormButton, FieldStyled, ErrorMessageStyled} from './Searchbar.styled';

const Searchbar = ({values, submitHandler }) => {

    const queryId = nanoid();
    const adultId = nanoid();
    const yearId = nanoid();

    const handleSubmit = (values, actions) => {
        submitHandler(values);
        // actions.resetForm();
    };
    let schema = yup.object().shape({
        query: yup.string().required('Required'),
    });

    // console.log(values);
    return(
        <Formik
        initialValues={values}
        validationSchema={schema}
        onSubmit={handleSubmit}
        >
            <SearchbarStyled>
                <div>
                    <FormGroup>
                        <label htmlFor={queryId}>Search Qery*</label>
                        <FieldStyled type="text" id={queryId} name="query" placeholder="Enter search query"/>
                        <ErrorMessageStyled name="query" component='div'/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor={yearId}>Year of release</label>
                        <FieldStyled type="number" id={yearId} name="year" placeholder="Enter search year"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor={adultId}><FieldStyled type="checkbox" id={adultId} name="adult"/>Adult included</label>
                    </FormGroup>
                </div>
                <FormButton type="submit">🔍 Search</FormButton>
            </SearchbarStyled>
        </Formik>
    ) 
};

export default Searchbar;