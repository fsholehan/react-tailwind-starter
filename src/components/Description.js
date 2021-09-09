import {
  CreditCardIcon,
  DocumentReportIcon,
  MapIcon,
} from "@heroicons/react/outline";

function Description() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row-dense my-16 lg:my-24 max-w-7xl mx-auto gap-4 px-4 lg:px-0">
      <div className="flex space-x-2">
        <div className="text-blue-500">
          <CreditCardIcon className="h-12 bg-blue-100 p-2 rounded-xl" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg">
            Transfer All Banks
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed
            provident necessitatibus architecto itaque consequatur quae, magnam
            voluptatem eum iusto?
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="text-red-500">
          <DocumentReportIcon className="h-12 bg-red-100 p-2 rounded-xl" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg">Monthly Report</h3>
          <p className="text-sm text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed
            provident necessitatibus architecto itaque consequatur quae, magnam
            voluptatem eum iusto?
          </p>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="text-green-500">
          <MapIcon className="h-12 bg-green-100 p-2 rounded-xl" />
        </div>
        <div>
          <h3 className="font-bold text-gray-800 text-lg">
            Support All Merchants
          </h3>
          <p className="text-sm text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sed
            provident necessitatibus architecto itaque consequatur quae, magnam
            voluptatem eum iusto?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
