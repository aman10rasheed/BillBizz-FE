import Ellipsis from "../../../assets/icons/Ellipsis"
import SearchBar from "../../sales/SearchBar"
import CreateAccountModal from "./CreateAccountModal"
import Table from "./Table"


type Props = {}

function Cash({}: Props) {
  return (
    <>
    <div className="p-5 bg-slate-50 h-[100vh]">
    <div className="flex items-center">
    <div>
    <h3 className="font-bold text-2xl text-textColor">Cash</h3>
    <p className="text-sm text-gray mt-1">
      Lorem ipsum dolor sit amet consectetur. Commodo enim odio fringilla egestas consectetur amet.
    </p>
  </div>
  <div className="ml-auto gap-3 flex items-center">
 <CreateAccountModal/>
    <div className="cursor-pointer">
      <Ellipsis />
    </div>
    </div>
    <div>
    </div>
    </div>

    <div className="mt-5 bg-white">
    <div className="p-6">
        <SearchBar placeholder="Search Accounts"/>
    </div>
    <div>
        <Table/>
    </div>
    </div>
    </div>
    </>
  )
}

export default Cash