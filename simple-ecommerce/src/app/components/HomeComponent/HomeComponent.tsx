import React from "react"
const HomeComponent = () => (
    <HomeComponent>
        <HeaderContainer>
            <Logo>MyStore</Logo>
            <Navigation>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
            </Navigation>
        </HeaderContainer>
        <HeroSection>
            <Logo>MyStore</Logo>
            <h1>Welcome to Our Online Store</h1>
            <p>Discover amazing products and deals for your every need.</p>
            <button>Shop Now</button>
        </HeroSection>
      <ProductContainer>
        {products.map((product: any ) => (
            <ProductCard key="0">
                <Image src={shoes} alt="{product.name}" />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>$0,00</p>
                <button>Add to Cart</button>
            </ProductCard>
        ))}
      </ProductContainer>
      <FooterContainer>
        <p>&copy; 2023 MyStore. All rights reserved.</p>
      </FooterContainer>
    </HomeComponent>
)