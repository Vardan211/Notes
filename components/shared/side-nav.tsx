"use client";
import { Star, Trash2, Archive } from "lucide-react";
import { Button } from "../ui";
import { Container } from "./container";
import { Folders } from "./folders";
import { Title } from "./title";
import Link from "next/link";

export default function SideNav() {
  return (
    <Container className="flex flex-col h-screen w-[300px] bg-black  p-4 space-y-[30px]">
      {/* Элементы внутри контейнера */}
      <h1 className="text-white">Nowted</h1>
      <Button>+ New Note</Button>
      <Folders />
      <div>
        <Title text="More" size="xs" className="text-white my-[8px]" />
        <ul className="space-y-[5px]">
          <li>
            <Link
              href="/favorites"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Star className="w-5 h-5 mr-[15px]" />
              <span>Favorites</span>
            </Link>
          </li>
          <li>
            <Link
              href="/trash"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Trash2 className="w-5 h-5 mr-[15px]" />
              <span>Trash</span>
            </Link>
          </li>
          <li>
            <Link
              href="/archived-notes"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Archive className="w-5 h-5 mr-[15px]" />
              <span>Archived Notes</span>
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
