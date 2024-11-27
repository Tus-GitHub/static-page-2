export default function Main() {
    return (
        <div className="p-6">
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="flex w-full lg:w-4/6 mr-12 mb-10 flex-col md:flex-row">
              <div className="w-full md:mr-10 bg-lblack rounded-xl p-6 h-96 mb-10 lg:mb-0 md:w-1/2">
                <div className="flex justify-between">
                  <p className="text-white font-semibold">Overview</p>
                  <p className="text-lgrey-5">June 2024</p>
                </div>
                <div className="flex justify-between mt-4 border-t-2 border-lgrey p-2 border-b-2">
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-xl text-white">40</p>
                    <p className="text-lgrey-5 text-sm">Transaction</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-xl text-white">24</p>
                    <p className="text-lgrey-5 text-sm">Income</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-xl text-white">16</p>
                    <p className="text-lgrey-5 text-sm">Outcome</p>
                  </div>
                </div>
                <div className="ml-2 mt-2 pl-3 pr-3 sm:text-xs lg:text-base">
                  <ul className=" pt-3 flex justify-between text-lgrey-4 ">
                    <li>S</li>
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>T</li>
                    <li>F</li>
                    <li>S</li>
                  </ul>
                  <ul className=" pt-3 flex justify-between text-lgrey-4">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                  </ul>
                  <ul className=" pt-3 flex justify-between text-lgrey-4">
                    <li>8<span className="text-lblack">0</span></li>
                    <li>9<span className="text-lblack">0</span></li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                    <li>13</li>
                    <li>14</li>
                  </ul>
                  <ul className=" pt-3 flex justify-between text-lgrey-4">
                    <li>15</li>
                    <li>16</li>
                    <li>17</li>
                    <li>18</li>
                    <li>19</li>
                    <li>20</li>
                    <li>21</li>
                  </ul>
                  <ul className=" pt-3 flex justify-between text-lgrey-4">
                    <li>22</li>
                    <li>23</li>
                    <li>24</li>
                    <li>25</li>
                    <li>26</li>
                    <li>27</li>
                    <li>28</li>
                  </ul>
                  <ul className=" pt-3 flex justify-between text-lgrey-4">
                    <li>29</li>
                    <li>30</li>
                    <li>31</li>
                    <li>1</li>
                    <li>2</li>
                    <li className="text-transparent">10</li>
                    <li className="text-transparent">10</li>
                  </ul>
                </div>
              </div>
              <div className="w-full bg-lblack rounded-xl p-6 h-96 md:w-1/2">

              </div>
            </div>
            <div className="w-full bg-lblack rounded-xl p-6 h-96 lg:w-2/6 ">

            </div>
          </div>
          <div className="flex pt-12 flex-col lg:flex-row">
            <div className="w-full bg-lblack rounded-xl p-6 h-96 mr-12 mb-10 lg:mb-0 lg:4/6">

            </div>
            <div className="w-full bg-lblack rounded-xl p-6 h-96 lg:w-3/6">

            </div>
          </div>
      </div>
    );
}