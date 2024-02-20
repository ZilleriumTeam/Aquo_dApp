"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, BuildingLibraryIcon, MagnifyingGlassIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import Transfer from "~~/components/Transfer";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col pt-10">
        <div className="px-1">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Welcome to Aquo</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          <div className="flex items-center justify-center text-center space-x-2">
            {/* <p className="my-2 font-medium">Connected Address:</p> */}
            <Transfer />
          </div>
          {/* <p className="text-center text-lg">
            Get started by editing{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>
          </p> */}
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <PlayCircleIcon className="h-8 w-8 fill-secondary" />
              <p>
                Create{" "}
                <Link href="/trade" passHref className="link">
                  Liquidity
                </Link>{" "}
                for your RWAs
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BuildingLibraryIcon className="h-8 w-8 fill-secondary" />
              <p>
                Compose DeFi strategies for your{" "}
                <Link href="/blockexplorer" passHref className="link">
                  RWAs
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BuildingLibraryIcon className="h-8 w-8 fill-secondary" />
              <p>
                Compose DeFi strategies for your{" "}
                <Link href="/blockexplorer" passHref className="link">
                  RWAs
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BuildingLibraryIcon className="h-8 w-8 fill-secondary" />
              <p>
                Compose DeFi strategies for your{" "}
                <Link href="/blockexplorer" passHref className="link">
                  RWAs
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;