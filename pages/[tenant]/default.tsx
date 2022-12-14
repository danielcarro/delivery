import { Searchinput } from '../../components/Searchinput';
import styles from '../../styles/Default.module.css';
import { GetServerSideProps } from 'next';
import { Tenant } from '../../types/Tenant';
import { useApi } from '../../libs/useApi';
import { useAppContext } from '../../contexts/app';
import { useEffect, useState } from 'react';
import { Product } from '../../types/Product';

const Product = (data: Props) => {
  const { tenant, setTenant } = useAppContext();
  useEffect(() => {
    setTenant(data.tenant);
  }, []);
  return (
    <div className={styles.container}>
      ...
    </div>
  );
}
export default Product;

type Props = {
  tenant: Tenant
  products: Product[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  const api = useApi(tenantSlug as string);

  // Get Tenant

  const tenant = await api.getTenant();
  if (!tenant) {
    return { redirect: { destination: '/', permanent: false } }
  }

  // Get Products

  const products = await api.getAllProducts();

  return {
    props: {
      tenant,
      products
    }
  }

}