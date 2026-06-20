import { FaEnvelope } from "react-icons/fa";
import Loader from "../components/common/Loader";
import Table from "../components/Table";
import { collectionColumn } from "../components/Table/columns/collectionColumn";
import useGetData from "../hooks/useGetData";

function PureCollectionsPage() {
  const { data: fetchedData, isLoading } = useGetData("/pure-collections");

  const details = fetchedData?.data?.data?.details;

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <span className="text-[28px] text-custom-blue2">
          <FaEnvelope />
        </span>
        <h1 className="text-2xl font-bold text-custom-gray2">Pure Collections</h1>
      </div>

      <Loader isLoading={isLoading}>
        <div className="mt-7">
          <div className="p-4 bg-white rounded shadow-md lg:p-8">
            {details && (
              <Table columnsHeading={collectionColumn} usersData={details} />
            )}
          </div>
        </div>
      </Loader>
    </div>
  );
}

export default PureCollectionsPage;
