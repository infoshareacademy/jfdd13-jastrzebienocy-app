import './helper.css'
import React from 'react'
import { Route } from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Modal, Link, Button } from 'semantic-ui-react'
import MainContent from './MainContent'
import styles from './AddRecipe.module.css'
import ImageUpload from './ImageUpload'

const regEx = /^[a-z\s\bąćśńółężź]{2,}$/i // Modified JK
const SelectInput = props => {
  const { name, errors, touched, labelform, tooltiptext } = props
  return (
    <div>
      <label>
        <div className={styles.selectCat}>{labelform}</div>
        <select
          style={{
            width: '100%',
            textAlignLast: 'center',
            color: 'grey',
            fontSize: '16px'
          }}
          className='ui selection dropdown'
          {...props}
          error={errors[name] && touched[name]}
        >
          <option value='włoska'>Kuchnia włoska</option>
          <option value='francuska'>Kuchnia francuska</option>
          <option value='polska'>Kuchnia polska</option>
          <option value='azjatycka'>Kuchnia azjatycka</option>
          <option value='amerykańska'>Kuchnia amerykańska</option>
          <option value='meksykańska'>Kuchnia meksykańska</option>
          <option value='gruzińska'>Kuchnia gruzińska</option>
          <option value='śródziemnomorska'>Kuchnia środziemnomorska</option>
          <option value='inna'>Inna</option>
        </select>
      </label>
    </div>
  )
}

class AddRecipe extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   open: props.open
    // }
  }

  handleUpload = () => {
    
    
}
  render () {
    // const { open } = this.props
    return (
      <div>
        <h1>Nowy przepis</h1>

        <Formik
          initialValues={{
            name: '',
            category: '',
            description: '',
            products: '',
            cookingTime: '',
            weight: '',
            imageurl: '',
            portions: '',
            favourites: false
          }}
          onSubmit={(values, actions) => {
            const data = Object.assign({}, {...values});
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
            (snapshot) => {},
            (error) => {
                // error function
                console.log(error)
            },
            () => {
                // complete function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                  data.imageurl = url;
                  
                  fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json', {
                    method: 'POST',
                    body: JSON.stringify(data) // .toLowerCase() // added to stndarize recipes in base -JK
                  })
                    .then(() => {
                      actions.setSubmitting(false)
                    })
                    .then(() => {
                      this.props.history.push('/')
                      this.props.history.push('/RecipeView')
                    })
                })
            });

            

          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .required('Pole jest wymagane!')
              .matches(
                regEx,
                'Możesz użyć tylko słów o minimalnej długości dwóch znaków'
              ),
            category: Yup.string(),
            description: Yup.string().required('Pole jest wymagane!'),
            products: Yup.string()
              .required('Pole jest wymagane!')
              .matches(
                regEx,
                'Możesz użyć tylko słów o minimalnej długości dwóch znaków'
              ),
            cookingTime: Yup.number()
              .typeError('Czas przygotowania podaj w minutach!')
              .integer()
              .positive(),
            weight: Yup.number()
              .typeError('Waga musi być cyfrą/liczbą!')
              .positive('Waga nie może być ujemna!')
              .required('Pole jest wymagane!'),

            imageUrl: Yup.string().url(),
            portions: Yup.number()
              .integer()
              .positive(),
            favourites: Yup.boolean() // Added JK
          })}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              setFieldValue
            } = props

            return (
              <form
                style={{
                  display: 'block',
                  textAlign: 'center',
                  margin: '0 auto',
                  maxWidth: '70%'
                }}
                onSubmit={handleSubmit}
              >
                <label
                  htmlFor='name'
                  style={{ display: 'block', margin: '5px' }}
                >
                  Nazwa przepisu
                </label>
                <input
                  id='name'
                  placeholder='Wpisz nazwę przepisu'
                  type='text'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div className='input-feedback'>{errors.name}</div>
                )}

                <label
                  htmlFor='products'
                  style={{ display: 'block', margin: '5px' }}
                >
                  <p>Produkt bazowy</p>
                </label>
                <input
                  id='products'
                  placeholder='Podaj produkt bazowy'
                  type='text'
                  value={values.products}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.products && touched.products
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.products && touched.products && (
                  <div className='input-feedback'>{errors.products}</div>
                )}

                <label
                  htmlFor='weight'
                  style={{ display: 'block', margin: '5px' }}
                >
                  <p>Ilość w gramach</p>
                </label>
                <input
                  id='weight'
                  placeholder='Podaj potrzebną ilość produktu bazowego'
                  type='text'
                  value={values.weight}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.weight && touched.weight
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.weight && touched.weight && (
                  <div className='input-feedback'>{errors.weight}</div>
                )}

                <label
                  htmlFor='description'
                  style={{ display: 'block', margin: '5px' }}
                >
                  Opis
                </label>
                <input
                  id='description'
                  placeholder='Opisz swój przepis'
                  type='text'
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.description && touched.description
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.description && touched.description && (
                  <div className='input-feedback'>{errors.description}</div>
                )}

                <SelectInput
                  labelform='Rodzaj kuchni'
                  name='category'
                  placeholder='Wybierz rodzaj kuchni'
                  onChange={handleChange}
                  value={values.category}
                  touched={touched}
                  errors={errors}
                />


                <label
                  htmlFor='cookingTime'
                  style={{ display: 'block', margin: '5px' }}
                >
                  Czas przygotowania w minutach
                </label>
                <input
                  id='cookingTime'
                  placeholder='Podaj czas przygotowania'
                  type='text'
                  value={values.cookingTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.cookingTime && touched.cookingTime
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.cookingTime && touched.cookingTime && (
                  <div className='input-feedback'>{errors.cookingTime}</div>
                )}

                <label
                  htmlFor='imageUrl'
                  style={{ display: 'block', margin: '5px' }}
                >
                  Zdjęcie
                </label>
                {/* <input
                  id='imageUrl'
                  placeholder='Podaj adres URL zdjęcia gotowego dania'
                  type='text'
                  value={values.imageUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.imageUrl && touched.imageUrl
                      ? 'text-input error'
                      : 'text-input'
                  }
                /> */}
                <ImageUpload onSucces = { (url) => { setFieldValue("imageUrl", url)
                }}
                />
                {errors.imageUrl && touched.imageUrl && (
                  <div className='input-feedback'>{errors.imageUrl}</div>
                )}

                <label
                  htmlFor='portions'
                  style={{ display: 'block', margin: '5px' }}
                >
                  Porcje
                </label>
                <input
                  id='portions'
                  placeholder='Podaj liczbę porcji'
                  type='text'
                  value={values.portions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.portions && touched.portions
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.portions && touched.portions && (
                  <div className='input-feedback'>{errors.portions}</div>
                )}

                <input
                  id='favorites'
                  type='text'
                  value={values.favorites}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={styles.None}
                />

                <div className='Buttons'>
                  <Button
                    color='black'
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Wyczyść
                  </Button>
                  <Button color='green' type='submit' disabled={isSubmitting}>
                    Wyślij
                  </Button>
                </div>
              </form>
            )
          }}
        </Formik>
      </div>
    )
  }
}

export default AddRecipe
