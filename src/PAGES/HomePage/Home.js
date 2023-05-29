import React from 'react'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Product_Sidebar from '../../COMPONENTS/Product/Product_Sidebar'
import img1 from '../../ASSETS/Images/p1.jpg'
import img2 from '../../ASSETS/Images/p2.jpg'
import img3 from '../../ASSETS/Images/p3.jpg'
import img4 from '../../ASSETS/Images/p4.jpg'
import ProductsSlider from '../../COMPONENTS/Product/ProductsSlider'


const Home = () => {

  const products = [
    {
        "ProductId": 1,
        "ProductName": "Paper Waste",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img1
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 10,
        "SalesPrice": 18,
        "ProductDiscount": 0,
        "ProductDiscountType": "Percentage",
        "ProductTax": 0,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 0,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Anuj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 2,
        "ProductName": "Electric Waste",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img2
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img3
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 10,
        "SalesPrice": 9,
        "ProductDiscount": 0,
        "ProductDiscountType": "Percentage",
        "ProductTax": 0,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 0,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Anuj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 3,
        "ProductName": "Polythen",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img3
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 10,
        "SalesPrice": 17,
        "ProductDiscount": 0,
        "ProductDiscountType": "Percentage",
        "ProductTax": 0,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 0,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Anuj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 1,
        "ProductName": "Paper Waste",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img1
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 10,
        "SalesPrice": 18,
        "ProductDiscount": 0,
        "ProductDiscountType": "Percentage",
        "ProductTax": 0,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 0,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Anuj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Aman dixit",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 2,
        "ProductName": "Electric Waste",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img2
            },
            {
                id: 2,
                image: img1
            },
            {
                id: 3,
                image: img3
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 10,
        "ProductUnit": "Unit 1",
        "ProductPrice": 10,
        "SalesPrice": 19,
        "ProductDiscount": 0,
        "ProductDiscountType": "Percentage",
        "ProductTax": 0,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 0,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Anuj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    },
    {
        "ProductId": 3,
        "ProductName": "Polythen",
        "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "ProductImage": [
            {
                id: 1,
                image: img3
            },
            {
                id: 2,
                image: img2
            },
            {
                id: 3,
                image: img3
            }
        ],
        "ProductCode": "P1",
        "ProductCategory": "Category 1",
        "ProductSubCategory": "Sub Category 1",
        "ProductBrand": "Brand 1",
        "ProductColor": "Color 1",
        "ProductSize": "Size 1",
        "ProductWeight": "Weight 1",
        "ProductMaterial": "Material 1",
        "ProductQuantity": 1,
        "ProductUnit": "Unit 1",
        "ProductPrice": 10,
        "SalesPrice": 17,
        "ProductDiscount": 0,
        "ProductDiscountType": "Percentage",
        "ProductTax": 0,
        "ProductTaxType": "Percentage",
        "ProductShippingCharge": 0,
        "ProductShippingChargeType": "Percentage",
        "ProductShippingTime": "1-2 days",
        "ProductShippingTimeType": "Days",
        "ProductShippingLocation": "Location 1",
        "ProductShippingLocationType": "Country",
        "ProductShippingReturnPolicy": "Return Policy 1",
        "ProductShippingReturnPolicyType": "Days",
        "ProductShippingReturnPolicyDescription": "Return Policy Description 1",
        "ProductShippingReturnPolicyDescriptionType": "Days",
        "ProductReviews": [
            {
                "ReviewId": 1,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 5,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {
                "ReviewId": 2,
                "Name": "Anuj",
                "Email": "",
                "Rating": 1,
                "Date": "2021-08-01",
                "Review": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            },
            {
                "ReviewId": 3,
                "Name": "Aman Dixit",
                "Email": "",
                "Rating": 4,
                "Date": "2021-08-01",
                "Review": "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            }
        ]
    }
]
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <BannerSlider />
      <HomeCategories />
      <Product_Sidebar />
      <Footer1 />

      <div className='slidercont'>
        <ProductsSlider products={products} categoryname='Related Products' />
      </div>
      <div className='slidercont'>
        <ProductsSlider products={products} categoryname='Explore More' />
      </div>
      <Footer2 />
    </div>
  )
}

export default Home