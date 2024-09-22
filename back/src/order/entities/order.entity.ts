/**
 * Représente l'entité `Order` pour les commandes dans l'application.
 * Cette entité est utilisée pour définir la structure du modèle `Order` dans la base de données
 * et pour l'exposer dans l'API GraphQL.
 *
 * @class Order
 * @property {number} id - L'identifiant unique de la commande.
 * @property {number} customerId - L'identifiant du client qui a passé la commande.
 * @property {string} customerName - Le nom du client.
 * @property {string} address - L'adresse de livraison de la commande.
 * @property {number} price - Le prix total de la commande.
 * @property {CartItem[]} products - La liste des produits dans la commande.
 * @property {string} status - Le statut de la commande (ex: 'en cours', 'livré').
 * @property {Date} createdAt - Date de création de la commande.
 * @property {Date} updatedAt - Dernière date de mise à jour de la commande.
 */

import { ObjectType, Field, Int } from "@nestjs/graphql";
import { CartItem } from "./cart-item.entity";

@ObjectType()
export class Order {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  customerId: number;

  @Field()
  customerName: string;

  @Field()
  address: string;

  @Field(() => Int)
  price: number;

  @Field(() => [CartItem])
  products: CartItem[];

  @Field()
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
