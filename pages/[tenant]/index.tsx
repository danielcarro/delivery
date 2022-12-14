import { Searchinput } from '../../components/Searchinput';
import styles from '../../styles/Home.module.css';
import { Banner } from '../../components/Banner';
import { ProductItem } from '../../components/ProductItem';
import { GetServerSideProps } from 'next';
import { Tenant } from '../../types/Tenant';
import { useApi } from '../../libs/useApi';
import { useAuthContext } from '../../contexts/auth';
import { useAppContext } from '../../contexts/app';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { Sidebar } from '../../components/Sidebar';
import { User } from '../../types/User';
import NoItensIcon from '../../public/assets/noitems.svg'
import { getCookie } from 'cookies-next';


const Home = (data: Props) => {
  const { setToken, setUser } = useAuthContext();
  const { tenant, setTenant } = useAppContext();


  useEffect(() => {
    setTenant(data.tenant);
    setToken(data.token);
    if (data.user) setUser(data.user);
  }, []);

  const [product, setProduct] = useState<Product[]>(data.products);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  //Search
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState('');
  const handleSearch = (searchValue: string) => setSearchText(searchValue);
  useEffect(() => {
    let newFilterdProducts: Product[] = [];
    for (let product of data.products) {
      if (product.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1) {
        newFilterdProducts.push(product);
      }
    } setFilteredProducts(newFilterdProducts);
  }, [searchText]);


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem Vindo (a) 👋</div>
            <div className={styles.headerSubtitle}>O que deseja pra hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div
              className={styles.menuButton}
              onClick={() => setSidebarOpen(true)}
            >
              <div className={styles.menuButtonLine} style={{ backgroundColor: tenant?.mainColor }}></div>
              <div className={styles.menuButtonLine} style={{ backgroundColor: tenant?.mainColor }}></div>
              <div className={styles.menuButtonLine} style={{ backgroundColor: tenant?.mainColor }}></div>
            </div>
            <Sidebar
              tenant={data.tenant}
              open={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />
          </div>
        </div>
        <div className={styles.headerBottom}>
          <Searchinput onSearch={handleSearch} />
        </div>
      </header>

      {searchText &&
        <>
          <div className={styles.searchText}>
            procurando por: <strong>{searchText}</strong>
          </div>
          {filteredProducts.length > 0 &&
            <div className={styles.grid}>
              {filteredProducts.map((item, index) => (
                <ProductItem
                  key={index}
                  data={item}
                />
              ))}
            </div>
          }
          {filteredProducts.length === 0 &&
            <div className={styles.noProducts}>
              <NoItensIcon color="#E0E0E0"/>
              <div className={styles.noProductsText}>Ops! Não há itens com este nome</div>
            </div>
          }
        </>
      }

      {!searchText &&
        <>
          <Banner />
          <div className={styles.grid}>
            {product.map((item, index) => (
              <ProductItem
                key={index}
                data={item}
              />
            ))}
          </div>
        </>
      }
    </div>
  );
}
export default Home;

type Props = {
  tenant: Tenant;
  products: Product[];
  token: string;
  user: User | null;
}

export const getServerSideProps: GetServerSideProps  = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi(tenantSlug as string);

  // Get Tenant

  const tenant = await api.getTenant();
  if (!tenant) {
    return { redirect: { destination: '/', permanent: false } }
  }

  // Get Logged User
  //const token = context.req.cookies.token; // funcionou
  const token = getCookie('token', context); // funcionou
  const user = await api.authorizeToken(token as string);

  // Get Products

  const products = await api.getAllProducts();

  return {
    props: {
      tenant,
      products,
      user,
      token 
    }
  }

}