// Helper styles for demo
import './helper.css'
import React from 'react'
import {Route} from 'react-router-dom'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Modal , Link} from 'semantic-ui-react'
import MainContent from './MainContent'

const regEx = /^[a-zA-Z ą ć ę ł ś ń ż ź]*$/

class AddRecipe extends React.Component {
  constructor (props) {
    super(props)
    // this.state = {
    //   open: props.open
    // }
  }

  render () {
    // const { open } = this.props
    return (
      <div>
        <h1>Nowy przepis</h1>
        {/* </Modal.Header>
    <Modal.Content> */}

        <Formik
          initialValues={{
            name: '',
            category: '',
            description: '',
            products: '',
            cookingTime: '',
            weight: '',
            imageUrl: '',
            portions: ''
          }}
          onSubmit={(values, actions, props) => {
            fetch('https://foodwaste-ecb78.firebaseio.com/recipes.json', {
              method: 'POST',
              body: JSON.stringify({ ...values }).toLowerCase() // added to stndarize recipes i base -JK
            }).then(() => {
              actions.setSubmitting(false)
            }).then(() => {
              console.log(props)
              // <Link to="/RecipeView"/>
              // props.history.replace("/RecipeView")
            })
          }}

          validationSchema={Yup.object().shape({
            name: Yup.string()
              .required('Required')
              .matches(regEx, 'Możesz użyć tylko słów'),
            category: Yup.string(),
            description: Yup.string().required('Required'),
            products: Yup.string().required('Required'),
            cookingTime: Yup.number()
              .integer()
              .positive(),
            weight: Yup.number().required('Required'),
            imageUrl: Yup.string().url(),
            portions: Yup.number()
              .integer()
              .positive()
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
              handleReset
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
                  value={values.products.toLowerCase()}
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
                  <p>Ilość</p>
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

                <label
                  htmlFor='category'
                  style={{ display: 'block', margin: '5px' }}
                >
                  Rodzaj kuchni
                </label>
                <input
                  id='category'
                  placeholder='Wybierz kuchnię'
                  type='text'
                  value={values.category}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.category && touched.category
                      ? 'text-input error'
                      : 'text-input'
                  }
                />
                {errors.category && touched.category && (
                  <div className='input-feedback'>{errors.name}</div>
                )}

                <label
                  htmlFor='cookingTime'
                  style={{ display: 'block', margin: '5px' }}
                >
                  Czas przygotowania
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
                <input
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
                <div className='Buttons'>
                  <button
                    style={{ background: '#FFC107' }}
                    type='button'
                    className='outline'
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                  >
                    Reset
                  </button>
                  <button
                    style={{ background: '#689F38' }}
                    type='submit'
                    disabled={isSubmitting}
                    as a href = ''
                  >
                    Wyślij
                  </button>
                </div>
              </form>
            )
          }}
        </Formik>
        {/* </Modal.Content>
    </Modal> */}
      </div>
    )
  }
}

export default AddRecipe
